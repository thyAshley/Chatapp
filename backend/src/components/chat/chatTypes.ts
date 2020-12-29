export interface ChatAttribute {
  id?: string;
  type?: string;
}

export interface ChatUserAttribute {
  id?: string;
  chatId: string;
  userId: string;
}

export interface MessageAttribute {
  id?: string;
  type: string;
  message: string;
  chatId: string;
  from: string;
}
