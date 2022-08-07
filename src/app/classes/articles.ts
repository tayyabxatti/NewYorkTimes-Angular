export class NewsResponse {
    status: string;
    copyright: string;
    section: string;
    last_updated: string;
    num_results: number;
    results: News[];
  }
  
  export class News {
    section: string;
    subsection: string;
    title: string;
    abstract: string;
    url: string;
    uri: string;
    byline: string;
    item_type: string;
    updated_date: string;
    created_date: string;
    published_date: string;
    material_type_facet: string;
    kicker: string;
    des_facet: string[];
    org_facet: string[];
    per_facet: string[];
    geo_facet: string[];
    multimedia: MultiMedia[];
    short_url: string;
  }

  export class MultiMedia {
    url: string;
    format: string;
    height: number;
    width: number;
    type: string;
    subtype: string;
    caption: string;
    copyright: string;
  }

export class SearchFilters {
    begin_date: string;
    end_date: string;
    facet: string;
    facet_fields: string;
    facet_filter: string;
    fl: string;
    fq: string;
    page: number;
    q: string;
    sort: string;
  }

  export interface ArticlesResponse {
    status: string;
    copyright: string;
    response: ArticlesDocuments;
  }

  export interface ArticlesDocuments {
    docs: Articles[];
  }

  export interface Articles {
    abstract: string;
    web_url: string;
    snippet: string;
    lead_paragraph: string;
    source: string;
    multimedia: ArticlesMultimedia[];
    headline: ArticlesHeadline;
    keywords: ArticlesKeywords[];
    pub_date: string;
    document_type: string;
    news_desk: string;
    section_name: string;
    byline: ArticlesByline;
    type_of_material: string;
    _id: string;
    word_count: string;
    uri: string;
  }

  export interface ArticlesHeadline {
    main: string;
    kicker: string;
    content_kicker: string;
    print_headline: string;
    name: string;
    seo: string;
    sub: string;
  }
  export interface ArticlesKeywords {
    name: string;
    value: string;
    rank: number;
    major: string;
  }
  export interface ArticlesByline {
    original: string;
    person: ArticlesPerson
    organization: string;
  }
  export interface ArticlesPerson {
    firstname: string;
    middlename: string;
    lastname: string;
    qualifier: string;
    title: string;
    role: string;
    organization: string;
    rank: number;
  }
  
  

  export interface ArticlesMultimedia {
    rank: number;
    subtype: string;
    caption: string;
    credit: string;
    type: string;
    url: string;
    height: string;
    width: string;
    legacy: ArticlesLegacy;
    subType: string;
    crop_name: string;
  }

  export interface ArticlesLegacy {
    xlarge: string;
    xlargewidth: number;
    xlargeheight: number;
  }
  
  