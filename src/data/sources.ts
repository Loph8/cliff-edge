// Source data for Cliff Edge.
// Taken from "Autism in China — Annotated Paper List" (Sophia Li, Non-Trivial Fellowship, July 2026).
// To add a source: copy one object, give it the next id, and fill in every field.
// `focus` = which life stage the source studies. Check these tags yourself; they were assigned from the annotations.

export type Lang = 'en' | 'zh';
export type Focus = 'children' | 'adults' | 'lifespan' | 'general';
export type Access = 'open' | 'abstract' | 'paywalled' | 'print';

export interface Source {
  id: number;
  theme: number; // key into THEMES
  authors: string;
  year: number | null;
  title: string;
  venue: string;
  url: string;
  lang: Lang;
  focus: Focus;
  access: Access;
  note: string;
}

export const THEMES: Record<number, { en: string; zh: string }> = {
  1: { en: 'Epidemiology & prevalence', zh: '流行病学与患病率' },
  2: { en: 'Diagnosis, screening & service systems', zh: '诊断、筛查与服务体系' },
  3: { en: 'Early intervention', zh: '早期干预' },
  4: { en: 'Adults: transition, employment & care', zh: '成年：转衔、就业与照护' },
  5: { en: 'Stigma, family experience & costs', zh: '污名、家庭经历与经济负担' },
  6: { en: 'Policy & legal framework', zh: '政策与法律框架' },
  7: { en: 'Urban–rural disparities', zh: '城乡差距' },
  8: { en: 'Chinese-language sources', zh: '中文文献' },
  9: { en: 'Reviews & commentaries', zh: '综述与评论' },
};

export const SOURCES: Source[] = [
  // 1 · Epidemiology and prevalence
  { id: 1, theme: 1, authors: 'Sun X., Allison C., Wei L., et al.', year: 2019, title: 'Autism prevalence in China is comparable to Western prevalence', venue: 'Molecular Autism, 10:7', url: 'https://molecularautism.biomedcentral.com/articles/10.1186/s13229-018-0246-0', lang: 'en', focus: 'children', access: 'open', note: 'Three-city study: once under-identification is corrected, prevalence (~1%) matches the West. The population exists; the services do not.' },
  { id: 2, theme: 1, authors: 'Zhou H., Xu X., Yan W., et al.', year: 2020, title: 'Prevalence of Autism Spectrum Disorder in China: A Nationwide Multi-center Population-based Study Among Children Aged 6 to 12 Years', venue: 'Neuroscience Bulletin, 36(9)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7475160/', lang: 'en', focus: 'children', access: 'open', note: 'First national estimate (0.70% adjusted). Every Chinese prevalence study covers children; no adult prevalence study exists.' },
  { id: 3, theme: 1, authors: 'Sun X., Allison C., Matthews F.E., et al.', year: 2013, title: 'Prevalence of autism in mainland China, Hong Kong and Taiwan: a systematic review and meta-analysis', venue: 'Molecular Autism, 4:7', url: 'https://molecularautism.biomedcentral.com/articles/10.1186/2040-2392-4-7', lang: 'en', focus: 'children', access: 'open', note: 'Explains why earlier Chinese estimates ran low: screening tools and diagnostic criteria.' },
  { id: 4, theme: 1, authors: '—', year: 2024, title: 'Prevalence of autism spectrum disorder in mainland China over the past 6 years: a systematic review and meta-analysis', venue: 'BMC Psychiatry', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11137880/', lang: 'en', focus: 'children', access: 'open', note: 'Updates the prevalence picture after 2018.' },
  { id: 5, theme: 1, authors: 'Zhao Y., Lu F., Ding R., et al.', year: 2025, title: 'Prevalence, incidence, and characteristics of autism spectrum disorder among children in Beijing, China', venue: 'Autism', url: 'https://journals.sagepub.com/doi/10.1177/13623613241290388', lang: 'en', focus: 'children', access: 'paywalled', note: 'Recent registry-based Beijing data (Peking University).' },

  // 2 · Diagnosis, screening and service systems
  { id: 6, theme: 2, authors: '—', year: 2022, title: 'Screening and services for autism among children in China', venue: 'The Lancet Psychiatry, 9(12)', url: 'https://www.thelancet.com/journals/lanpsy/article/PIIS2215-0366(22)00366-2/fulltext', lang: 'en', focus: 'children', access: 'abstract', note: 'Comment on the 2022 National Health Commission screening specification for ages 0–6 under Healthy China 2030.' },
  { id: 7, theme: 2, authors: 'Li X., et al.', year: null, title: 'Early screening and diagnosis for ASD children in China', venue: 'Pediatric Medicine (AME)', url: 'https://pm.amegroups.org/article/view/4942/html', lang: 'en', focus: 'children', access: 'open', note: 'Overview of the screening pathway through the maternal-child health system.' },
  { id: 8, theme: 2, authors: '—', year: 2018, title: 'Current status and challenge in clinical work of autism spectrum disorders in China', venue: 'World Journal of Pediatrics', url: 'https://link.springer.com/article/10.1007/s12519-018-0166-2', lang: 'en', focus: 'children', access: 'paywalled', note: 'Clinician view: too few child psychiatrists, diagnostic bottlenecks.' },
  { id: 9, theme: 2, authors: '—', year: 2025, title: 'Factors influencing timely diagnosis of autism in China: an application of Andersen’s behavioral model of health services use', venue: 'PMC', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11837288/', lang: 'en', focus: 'children', access: 'open', note: 'Quantifies delays to diagnosis, including the rural lag.' },
  { id: 10, theme: 2, authors: '—', year: 2019, title: 'Service provision for autism in mainland China: Preliminary mapping of service pathways', venue: 'Social Science & Medicine', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6345370/', lang: 'en', focus: 'children', access: 'open', note: 'Maps the full service pathway families navigate; strong systems framing.' },
  { id: 11, theme: 2, authors: 'Wong V., et al.', year: 2004, title: 'A modified screening tool for autism (CHAT-23) for Chinese children', venue: 'Pediatrics', url: 'https://pubmed.ncbi.nlm.nih.gov/15286253/', lang: 'en', focus: 'children', access: 'abstract', note: 'Classic adaptation of a screening tool for Chinese children.' },

  // 3 · Early intervention
  { id: 12, theme: 3, authors: 'McCabe H.', year: 2013, title: 'Bamboo shoots after the rain: Development and challenges of autism intervention in China', venue: 'Autism, 17(5)', url: 'https://journals.sagepub.com/doi/10.1177/1362361312436849', lang: 'en', focus: 'children', access: 'paywalled', note: 'Qualitative history of China’s intervention sector; notes its near-exclusive focus on young children.' },
  { id: 13, theme: 3, authors: 'McCabe H.', year: null, title: '“So They’ll Have Somewhere to Go”: Establishing NGOs for Children with Autism in the People’s Republic of China', venue: 'Voluntas', url: 'https://www.cambridge.org/core/journals/voluntas/article/abs/so-theyll-have-somewhere-to-go-establishing-nongovernmental-organizations-ngos-for-children-with-autism-in-the-peoples-republic-of-china/3FC0133549399ABF65780AADD237A5EA', lang: 'en', focus: 'children', access: 'abstract', note: 'Parent-founded NGOs and the Stars and Rain model.' },
  { id: 14, theme: 3, authors: '—', year: 2022, title: 'A virtuous circle: Stakeholder perspectives of a short-term intensive parent training programme delivered within routine services for autism in China', venue: 'Autism', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9597148/', lang: 'en', focus: 'children', access: 'open', note: 'Modern successor to the parent-training literature.' },
  { id: 15, theme: 3, authors: '—', year: 2015, title: 'Statistical analysis of twenty years (1993–2012) of data from mainland China’s first intervention center for children with autism spectrum disorder', venue: 'PMC', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4332440/', lang: 'en', focus: 'children', access: 'open', note: 'Twenty years of Stars and Rain intake data: who actually gets services.' },

  // 4 · Adults
  { id: 16, theme: 4, authors: 'Huang A., Ye Y., Han X., Zhang Z., Gu J., Ke X.', year: 2026, title: 'Reconceptualising independence in autistic adulthood: Comparing Chinese parents’ perspectives on autistic adults with and without intellectual disabilities', venue: 'Autism, 30(1)', url: 'https://journals.sagepub.com/doi/10.1177/13623613251374905', lang: 'en', focus: 'adults', access: 'abstract', note: 'First study of how mainland families of autistic adults understand independence.' },
  { id: 17, theme: 4, authors: '—', year: 2025, title: 'A Qualitative Study of the Diagnostic Experiences of Young Autistic Adults in China', venue: 'Journal of Autism and Developmental Disorders', url: 'https://link.springer.com/article/10.1007/s10803-025-07073-7', lang: 'en', focus: 'adults', access: 'paywalled', note: '18 autistic adults (20–30) on barriers to adult diagnosis; rare first-person data.' },
  { id: 18, theme: 4, authors: 'Liu F., Begeer S., Hoekstra R.A., Wang C., Scheeren A.M.', year: 2024, title: 'Autistic adults in China and the Netherlands: Proxy-reported community integration and life satisfaction', venue: 'Autism', url: 'https://journals.sagepub.com/doi/10.1177/13623613241258182', lang: 'en', focus: 'adults', access: 'abstract', note: 'Lower proxy-reported life satisfaction in China, attributed to thin services.' },
  { id: 19, theme: 4, authors: '—', year: 2025, title: 'Self-Reported Psychosocial Outcomes of Autistic Adults Living in China and The Netherlands', venue: 'Autism in Adulthood', url: 'https://www.liebertpub.com/doi/10.1089/aut.2024.0073', lang: 'en', focus: 'adults', access: 'paywalled', note: 'Companion self-report study: employment, living situation, internalized stigma.' },
  { id: 20, theme: 4, authors: '—', year: 2026, title: 'Provision of Alternative Care for Autistic Adults: A Multi-Stakeholder Qualitative Study in China', venue: 'PubMed', url: 'https://pubmed.ncbi.nlm.nih.gov/41848039/', lang: 'en', focus: 'adults', access: 'abstract', note: '36 interviews across four cities on who cares for autistic adults when parents cannot.' },
  { id: 21, theme: 4, authors: 'Dong P., Xu T., Yuan W.', year: 2026, title: 'Perspectives on School-to-Work Transition Services for Youth With Autism in China', venue: 'Research and Practice for Persons with Severe Disabilities', url: 'https://doi.org/10.1177/15407969251355939', lang: 'en', focus: 'adults', access: 'abstract', note: 'Interviews with youth, parents, teachers, employers; recommends individualized transition plans.' },
  { id: 22, theme: 4, authors: '—', year: null, title: 'The Employment Status Quo of Young Adults with ASD in China', venue: 'Asian Social Science (CCSE)', url: 'https://ccsenet.org/journal/index.php/ass/article/download/0/0/50951/55232', lang: 'en', focus: 'adults', access: 'open', note: 'Reports under 5% employment among autistic people over 16; describes pioneer projects.' },
  { id: 23, theme: 4, authors: 'Du X.', year: 2021, title: 'On a Chinese Mountaintop, a Community Just for People With Autism', venue: 'Sixth Tone', url: 'https://www.sixthtone.com/news/1007301', lang: 'en', focus: 'adults', access: 'open', note: 'Reportage on a parent-funded cooperative for autistic adults; source of the “~2,000 facilities, mostly for under-7s” figure.' },
  { id: 24, theme: 4, authors: '—', year: null, title: 'For Chinese with autism, finding work was hard. Now, it’s even harder', venue: 'Sixth Tone', url: 'https://www.sixthtone.com/news/1006271', lang: 'en', focus: 'adults', access: 'open', note: 'Companion piece on adult employment.' },
  { id: 25, theme: 4, authors: '—', year: 2022, title: 'Finding Home and Hope for China’s Autistic Adults', venue: 'The World of Chinese', url: 'https://www.theworldofchinese.com/2022/04/finding-home-and-hope-for-chinas-autistic-adults/', lang: 'en', focus: 'adults', access: 'open', note: 'Feature on gaps in adult housing and residential care (托养).' },

  // 5 · Stigma, family, costs
  { id: 26, theme: 5, authors: 'Yu L., Stronach S., Harrison A.J.', year: 2020, title: 'Public knowledge and stigma of autism spectrum disorder: Comparing China with the United States', venue: 'Autism, 24(6)', url: 'https://journals.sagepub.com/doi/abs/10.1177/1362361319900839', lang: 'en', focus: 'general', access: 'paywalled', note: '38% of Chinese respondents endorsed stigma vs 14% in the US.' },
  { id: 27, theme: 5, authors: '—', year: 2022, title: 'A qualitative study on the experience of stigma for Chinese parents of children with autism spectrum disorder', venue: 'Scientific Reports, 12', url: 'https://www.nature.com/articles/s41598-022-23978-0', lang: 'en', focus: 'children', access: 'open', note: 'Face (mianzi), parent-blaming stigma, social withdrawal.' },
  { id: 28, theme: 5, authors: '—', year: 2023, title: 'Autism spectrum disorder knowledge scale: Chinese revision of the general population version', venue: 'BMC Psychiatry', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9875421/', lang: 'en', focus: 'general', access: 'open', note: 'Validated Chinese public-knowledge instrument; documents common misconceptions.' },
  { id: 29, theme: 5, authors: '—', year: 2024, title: 'Formal social support and quality of life of caregivers with autistic children: a large-scale nationwide survey in China', venue: 'PMC', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10766108/', lang: 'en', focus: 'children', access: 'open', note: 'Nationwide caregiver quality-of-life data.' },
  { id: 30, theme: 5, authors: 'Zhao Y., Luo Y., Zhang R., Zheng X.', year: 2023, title: 'Direct and indirect costs for families of children with autism spectrum disorder in China', venue: 'Autism, 27', url: 'https://journals.sagepub.com/doi/10.1177/13623613231158862', lang: 'en', focus: 'children', access: 'abstract', note: 'About $34,000 per year in family costs.' },
  { id: 31, theme: 5, authors: '—', year: 2015, title: 'Employment and financial burden of families with preschool children diagnosed with autism spectrum disorders in urban China', venue: 'PMC', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4307683/', lang: 'en', focus: 'children', access: 'open', note: '58% of families say caregiving changed their employment decisions.' },

  // 6 · Policy and legal framework
  { id: 32, theme: 6, authors: 'Zou M., Han Y., Jin M., et al.', year: 2025, title: 'Supporting access to comprehensive services: A scoping review of national policies related to autism in mainland China', venue: 'Autism, 29(7)', url: 'https://journals.sagepub.com/doi/10.1177/13623613241311736', lang: 'en', focus: 'lifespan', access: 'abstract', note: 'Reviews 81 national policies through 2022; few target adults.' },
  { id: 33, theme: 6, authors: 'National People’s Congress (UN DESA translation)', year: null, title: 'Law of the PRC on the Protection of Persons with Disabilities', venue: 'Primary legal source', url: 'https://www.un.org/development/desa/disabilities/wp-content/uploads/sites/15/2019/11/China_Law-of-the-Peoples-Republic-of-China-on-the-Protection-of-Persons-with-Disabilities.pdf', lang: 'en', focus: 'lifespan', access: 'open', note: 'The primary disability law.' },
  { id: 34, theme: 6, authors: 'National Center for Mental Health', year: 2024, title: '孤独症儿童关爱促进行动实施方案（2024—2028年）', venue: 'Official policy document', url: 'https://ncmhc.org.cn/channel/newsinfo/7572', lang: 'zh', focus: 'children', access: 'open', note: 'Current five-year autism action plan, again focused on children.' },
  { id: 35, theme: 6, authors: '—', year: 2023, title: 'Why can’t children with autism integrate into society in China? Study based on the perspective of NGO classification', venue: 'PMC', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10281026/', lang: 'en', focus: 'children', access: 'open', note: 'Why policy commitments fail in practice, from the NGO side.' },

  // 7 · Urban–rural
  { id: 36, theme: 7, authors: '—', year: 2025, title: 'Regional Disparities in the Use and Demand for Digital Health Services for Autism Spectrum Disorder in China', venue: 'Journal of Medical Internet Research, 27', url: 'https://www.jmir.org/2025/1/e77157', lang: 'en', focus: 'general', access: 'open', note: 'Regional service inequities and telehealth as a partial fix.' },
  { id: 37, theme: 7, authors: '—', year: 2022, title: 'Age of Diagnosis and Demographic Factors Associated with Autism Spectrum Disorders in Chinese Children: A Multi-Center Survey', venue: 'Neuropsychiatric Disease and Treatment', url: 'https://www.tandfonline.com/doi/full/10.2147/NDT.S374840', lang: 'en', focus: 'children', access: 'open', note: 'Geography and family background shape diagnostic age.' },

  // 8 · Chinese-language sources
  { id: 38, theme: 8, authors: '滕芷萱、孙凌寒', year: 2024, title: '心智障碍青年就业转衔服务研究——以杭州X机构为例', venue: '心理学进展, 14(6)', url: 'https://pdf.hanspub.org/ap2024146_291134735.pdf', lang: 'zh', focus: 'adults', access: 'open', note: 'Participant observation of employment-transition services for young adults at a Hangzhou parent-founded NGO.' },
  { id: 39, theme: 8, authors: '—', year: 2023, title: '中国0～6岁儿童孤独症谱系障碍筛查患病现状', venue: '中国康复理论与实践, 29(5)', url: 'http://cjrh.bjmu.edu.cn/fileup/HTML/2023-5-423.shtml', lang: 'zh', focus: 'children', access: 'open', note: 'Chinese-language review of screening and prevalence for ages 0–6.' },
  { id: 40, theme: 8, authors: '莫春梅', year: 2024, title: '多元视角探究孤独症学生劳动素养与职业适应力关系的研究', venue: 'EdD thesis, Education University of Hong Kong', url: 'https://www.lib.eduhk.hk/pure-data/pub/202500472.pdf', lang: 'zh', focus: 'adults', access: 'open', note: 'Vocational adaptability of autistic students; long Chinese literature review.' },
  { id: 41, theme: 8, authors: '—', year: 2024, title: '基于CiteSpace的我国社会工作介入自闭症研究热点与趋势分析', venue: '社会科学前沿', url: 'https://pdf.hanspub.org/ass20240200000_69526510.pdf', lang: 'zh', focus: 'general', access: 'open', note: 'Bibliometric map of 348 CNKI papers on social work and autism (2013–2023).' },
  { id: 42, theme: 8, authors: '—', year: null, title: '优势视角下促进自闭症人士社会交往的社会工作干预', venue: '社会工作与管理', url: 'https://html.rhhz.net/shgzygl/html/1552903302986-488433951.htm', lang: 'zh', focus: 'lifespan', access: 'open', note: 'Strengths-based social-work intervention with autistic people, not only children.' },
  { id: 43, theme: 8, authors: '中国精神残疾人及亲友协会', year: 2014, title: '中国孤独症家庭需求蓝皮书', venue: 'Print report', url: 'https://m.douban.com/book/subject/30781866/', lang: 'zh', focus: 'lifespan', access: 'print', note: 'National family-needs survey of 4,000+ parents; print only.' },

  // 9 · Reviews and commentaries
  { id: 44, theme: 9, authors: 'Wang C.', year: 2020, title: 'The First National Prevalence of Autism Spectrum Disorder in China', venue: 'Neuroscience Bulletin (commentary)', url: 'https://link.springer.com/article/10.1007/s12264-020-00571-x', lang: 'en', focus: 'children', access: 'open', note: 'Context for the first national prevalence study.' },
  { id: 45, theme: 9, authors: '—', year: 2026, title: 'Autism Spectrum Disorders in China: Temporal Trends in Prevalence, Incidence, and DALYs (1990–2021) Based on GBD 2021 Data', venue: 'PubMed', url: 'https://pubmed.ncbi.nlm.nih.gov/41487031/', lang: 'en', focus: 'lifespan', access: 'abstract', note: 'Burden-of-disease trends across the lifespan; one of few adult-inclusive data sources.' },
  { id: 46, theme: 9, authors: 'Tao K.T.', year: null, title: 'Brief report: Infantile autism in China', venue: 'Journal of Autism and Developmental Disorders', url: 'https://link.springer.com/article/10.1007/BF01495062', lang: 'en', focus: 'children', access: 'paywalled', note: 'The historical starting point: first diagnoses, 1982, Nanjing.' },
];
