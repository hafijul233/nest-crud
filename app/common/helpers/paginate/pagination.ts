import { SelectQueryBuilder } from 'typeorm';
import { LengthAwarePaginator } from '../../interfaces/length-aware-paginator.interface';

export const paginate = async function (
  builder: SelectQueryBuilder<any>,
  page: number,
  perPage: number,
): Promise<LengthAwarePaginator> {
  const skip = (page - 1) * perPage;
  const count = await builder.getCount();
  const calculateLastPage = count % perPage;
  const lastPage =
    calculateLastPage === 0 ? count / perPage : Math.trunc(count / perPage) + 1;
  const res = await builder.skip(skip).take(perPage).getMany();
  return {
    from: skip <= count ? skip + 1 : null,
    to: count > skip + perPage ? skip + perPage : count,
    per_page: perPage,
    total: count,
    current_page: page,
    prev_page: page > 1 ? page - 1 : null,
    next_page: count > skip + perPage ? page + 1 : null,
    last_page: lastPage,
    data: res || [],
  };
};
