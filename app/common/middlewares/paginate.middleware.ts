import { NextFunction, Request, Response } from 'express';
import { SelectQueryBuilder } from 'typeorm';
import { LengthAwarePaginator } from '../interfaces/length-aware-paginator.interface';
import { paginate } from '../helpers/paginate/pagination';

declare module 'typeorm' {
  export interface SelectQueryBuilder<Entity> {
    paginate(per_page?: number | null): Promise<LengthAwarePaginator>;
  }
}

export function pagination(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  SelectQueryBuilder.prototype.paginate = async function (
    per_page?: number | null,
  ): Promise<LengthAwarePaginator> {
    const current_page = getPage(req);
    if (!per_page) per_page = getPerPage(req);
    // If not set, then get from request, default to 15
    else per_page = getPerPage(req, per_page); // If set, check if the request has per_page (which will override), or fallback to the set default
    return await paginate(this, current_page, per_page);
  };
  next();
}

export function getPerPage(req: Request, defaultPerPage = 15) {
  return parseInt(req.query.per_page as string) || defaultPerPage;
}

export function getPage(req: Request, defaultPage = 1) {
  return parseInt(req.query.page as string) || defaultPage;
}
