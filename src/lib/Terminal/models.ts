export type DocLink = {
  id: string;
  text: string;
};

export type Entity = {
  id: string;
  type: "Question" | "Information";
  docLinks?: DocLink[];
};

export type Choice = {
  text: string;
  nextEntityId?: Entity["id"];
};

export type Question = Entity & {
  question: string;
  choices: Choice[];
};

export type Information = Entity & {
  message: string;
  nextQuestion?: Entity["id"];
};

export type Prompt = Question | Information;
