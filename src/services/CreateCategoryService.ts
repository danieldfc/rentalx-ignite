import { CategoriesRepository } from '../repositories/CategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute({ name, description }: IRequest) {
    const category = this.categoriesRepository.findByName(name);

    if (category) {
      throw new Error('Categoria já existente!');
    }

    this.categoriesRepository.create({
      name,
      description,
    });
  }
}

export { CreateCategoryService };