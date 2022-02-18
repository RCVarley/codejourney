export default {};

export interface Position {
  title: string,
  company: string,
  start: Date,
  end?: Date,
  current: boolean,
  feats?: string[],
  role?: string[],
}

export interface Highlight {
  icon: string,
  hook: string,
  caption: string,
}

export interface TagGroup {
  title: string,
  tags: string[],
}

export interface Course {
  title: string,
  institution: string,
  start: Date,
  end?: Date,
  current: boolean,
  achieved: string,
}
