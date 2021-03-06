import { ArticleInMemoryRepository } from "./ArticleInMemoryRepository";
import { ArticleLoadPort } from "board-domain/dist/article/port/outgoing/ArticleLoadPort";
import { ArticleSavePort } from "board-domain/dist/article/port/outgoing/ArticleSavePort";
import { ArticleImpl } from "board-domain/dist/article/model/ArticleImpl";

export class ArticlePersistenceAdapter
  implements ArticleLoadPort, ArticleSavePort
{
  constructor(private repository: ArticleInMemoryRepository) {}

  public save = (article: ArticleImpl): void => {
    this.repository.save(article);
  };

  public findAll = (): ArticleImpl[] => this.repository.findAll();

  public findById = (id: number): ArticleImpl | undefined =>
    this.repository.findById(id);
}
