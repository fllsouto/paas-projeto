export interface IPing {
  id: number;
  content: string;
  userId: number;
  likes: number;
  pingReferenceId?: number;
  shareId?: number;
  deleted: number;
}
