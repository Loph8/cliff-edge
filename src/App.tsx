import { useMemo, useState } from 'react';
import { SOURCES, THEMES, type Focus, type Lang, type Source } from './data/sources';

type UILang = 'en' | 'zh';

const T = {
  en: {
    title: 'Cliff Edge',
    tagline: 'A bilingual evidence explorer on autism support in China, and the gap that opens at age 18.',
    search: 'Search titles, authors, notes…',
    allThemes: 'All themes',
    allLangs: 'All languages',
    allFocus: 'All life stages',
    showing: (n: number, t: number) => `Showing ${n} of ${t} sources`,
    gapTitle: 'Where the research looks',
    gapNote: (c: number, a: number) =>
      `${c} sources study children; ${a} study adults. No adult prevalence study exists.`,
    copy: 'Copy citation',
    copied: 'Copied',
    open: 'Open source',
    clear: 'Clear filters',
    none: 'No sources match these filters.',
    about:
      'Compiled by Sophia Li during the Non-Trivial Fellowship (2026). Life-stage tags are the compiler’s coding of each source.',
    lang: { en: 'English', zh: 'Chinese' },
    focus: { children: 'Children', adults: 'Adults', lifespan: 'Lifespan', general: 'General public' },
    access: { open: 'Open access', abstract: 'Abstract only', paywalled: 'Paywalled', print: 'Print only' },
  },
  zh: {
    title: '断崖',
    tagline: '中国孤独症支持的双语文献检索——以及18岁之后出现的服务断层。',
    search: '搜索标题、作者、注释…',
    allThemes: '全部主题',
    allLangs: '全部语言',
    allFocus: '全部年龄段',
    showing: (n: number, t: number) => `显示 ${n} / ${t} 篇文献`,
    gapTitle: '研究关注的年龄段',
    gapNote: (c: number, a: number) => `${c} 篇研究儿童；${a} 篇研究成人。目前尚无成人患病率研究。`,
    copy: '复制引用',
    copied: '已复制',
    open: '打开原文',
    clear: '清除筛选',
    none: '没有符合条件的文献。',
    about: '由 Sophia Li 在 Non-Trivial Fellowship（2026）期间整理。年龄段标签为整理者对每篇文献的编码。',
    lang: { en: '英文', zh: '中文' },
    focus: { children: '儿童', adults: '成人', lifespan: '全生命周期', general: '公众' },
    access: { open: '开放获取', abstract: '仅摘要', paywalled: '付费', print: '仅纸本' },
  },
} as const;

const FOCUS_ORDER: Focus[] = ['children', 'adults', 'lifespan', 'general'];

function citation(s: Source) {
  const who = s.authors === '—' ? '' : `${s.authors} `;
  const yr = s.year ? `(${s.year}). ` : '(n.d.). ';
  return `${who}${yr}${s.title}. ${s.venue}. ${s.url}`;
}

export default function App() {
  const [ui, setUi] = useState<UILang>('en');
  const [q, setQ] = useState('');
  const [theme, setTheme] = useState<number | 'all'>('all');
  const [lang, setLang] = useState<Lang | 'all'>('all');
  const [focus, setFocus] = useState<Focus | 'all'>('all');
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const t = T[ui];

  const counts = useMemo(() => {
    const c: Record<Focus, number> = { children: 0, adults: 0, lifespan: 0, general: 0 };
    SOURCES.forEach((s) => c[s.focus]++);
    return c;
  }, []);
  const max = Math.max(...Object.values(counts));

  const shown = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return SOURCES.filter(
      (s) =>
        (theme === 'all' || s.theme === theme) &&
        (lang === 'all' || s.lang === lang) &&
        (focus === 'all' || s.focus === focus) &&
        (!needle || `${s.title} ${s.authors} ${s.note} ${s.venue}`.toLowerCase().includes(needle)),
    );
  }, [q, theme, lang, focus]);

  const copy = async (s: Source) => {
    try {
      await navigator.clipboard.writeText(citation(s));
      setCopiedId(s.id);
      setTimeout(() => setCopiedId(null), 1500);
    } catch {
      /* clipboard blocked: do nothing */
    }
  };

  const filtered = theme !== 'all' || lang !== 'all' || focus !== 'all' || q !== '';

  return (
    <div className="wrap">
      <header>
        <div className="top">
          <h1>{t.title}</h1>
          <button className="toggle" onClick={() => setUi(ui === 'en' ? 'zh' : 'en')}>
            {ui === 'en' ? '中文' : 'English'}
          </button>
        </div>
        <p className="tagline">{t.tagline}</p>
      </header>

      <section className="gap" aria-label={t.gapTitle}>
        <h2>{t.gapTitle}</h2>
        {FOCUS_ORDER.map((f) => (
          <button
            key={f}
            className={`bar-row ${focus === f ? 'active' : ''}`}
            onClick={() => setFocus(focus === f ? 'all' : f)}
          >
            <span className="bar-label">{t.focus[f]}</span>
            <span className="bar-track">
              <span className={`bar bar-${f}`} style={{ width: `${(counts[f] / max) * 100}%` }} />
            </span>
            <span className="bar-n">{counts[f]}</span>
          </button>
        ))}
        <p className="gap-note">{t.gapNote(counts.children, counts.adults)}</p>
      </section>

      <section className="controls">
        <input
          type="search"
          placeholder={t.search}
          value={q}
          onChange={(e) => setQ(e.target.value)}
          aria-label={t.search}
        />
        <select value={theme} onChange={(e) => setTheme(e.target.value === 'all' ? 'all' : Number(e.target.value))}>
          <option value="all">{t.allThemes}</option>
          {Object.entries(THEMES).map(([k, v]) => (
            <option key={k} value={k}>
              {k} · {v[ui]}
            </option>
          ))}
        </select>
        <select value={lang} onChange={(e) => setLang(e.target.value as Lang | 'all')}>
          <option value="all">{t.allLangs}</option>
          <option value="en">{t.lang.en}</option>
          <option value="zh">{t.lang.zh}</option>
        </select>
        <select value={focus} onChange={(e) => setFocus(e.target.value as Focus | 'all')}>
          <option value="all">{t.allFocus}</option>
          {FOCUS_ORDER.map((f) => (
            <option key={f} value={f}>
              {t.focus[f]}
            </option>
          ))}
        </select>
      </section>

      <div className="status">
        <span>{t.showing(shown.length, SOURCES.length)}</span>
        {filtered && (
          <button
            className="link"
            onClick={() => {
              setQ('');
              setTheme('all');
              setLang('all');
              setFocus('all');
            }}
          >
            {t.clear}
          </button>
        )}
      </div>

      <ul className="list">
        {shown.length === 0 && <li className="empty">{t.none}</li>}
        {shown.map((s) => (
          <li key={s.id} className="card">
            <div className="tags">
              <span className="tag theme">{THEMES[s.theme][ui]}</span>
              <span className={`tag focus-${s.focus}`}>{t.focus[s.focus]}</span>
              <span className="tag">{t.lang[s.lang]}</span>
              <span className="tag muted">{t.access[s.access]}</span>
            </div>
            <h3 lang={s.lang === 'zh' ? 'zh' : 'en'}>{s.title}</h3>
            <p className="meta">
              {s.authors !== '—' && <>{s.authors} · </>}
              {s.year ?? 'n.d.'} · <em>{s.venue}</em>
            </p>
            <p className="note">{s.note}</p>
            <div className="actions">
              <a href={s.url} target="_blank" rel="noreferrer">
                {t.open} ↗
              </a>
              <button className="link" onClick={() => copy(s)}>
                {copiedId === s.id ? t.copied : t.copy}
              </button>
            </div>
          </li>
        ))}
      </ul>

      <footer>{t.about}</footer>
    </div>
  );
}
