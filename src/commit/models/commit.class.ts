import { CommitEntity } from './commit.entity';

export class CommitClass {
  private author: string;
  private email: string;
  private date: string;
  private sha: string;
  private message: string;
  private avatar_url: string;

  constructor(commit: CommitEntity) {
    this.setAuthor(commit.author);
    this.setEmail(commit.email);
    this.setDate(commit.date);
    this.setSha(commit.sha);
    this.setMessage(commit.message);
    this.setAvatarUrl(commit.avatar_url);
  }

  getAuthor(): string {
    return this.author;
  }

  setAuthor(value: string): void {
    this.author = value;
  }

  getEmail(): string {
    return this.email;
  }

  setEmail(value: string): void {
    this.email = value;
  }

  getDate(): string {
    return this.date;
  }

  setDate(value: string): void {
    this.date = value;
  }

  getSha(): string {
    return this.sha;
  }

  setSha(value: string): void {
    this.sha = value;
  }

  getMessage(): string {
    return this.message;
  }

  setMessage(value: string): void {
    this.message = value;
  }

  getAvatarUrl(): string {
    return this.avatar_url;
  }

  setAvatarUrl(value: string): void {
    this.avatar_url = value;
  }
}
