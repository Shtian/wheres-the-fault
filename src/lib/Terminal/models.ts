export type DocumentationLink = {
  href: string;
  text: string;
};

export type Entity = {
  id: string;
  type: "Question" | "Information";
  docLinks?: DocumentationLink[];
};

export type Choice = {
  text: string;
  nextEntityId?: Entity["id"];
};

export type Question = Entity & {
  type: "Question";
  question: string;
  choices: Choice[];
};

export type Information = Entity & {
  type: "Information";
  message: string;
  nextQuestion?: Entity["id"];
};

export type Prompt = Question | Information;
