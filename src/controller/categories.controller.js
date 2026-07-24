import { getCategoryById, getProjectsByCategory } from '../models/categories.model.js';

export const getCategoryDetails = async (req, res, next) => {
  try {
    const categoryId = req.params.id;
    const category = await getCategoryById(categoryId);
    if (!category) {
      const err = new Error('Category not found');
      err.status = 404;
      return next(err);
    }
    const projects = await getProjectsByCategory(categoryId);
    res.render('category-details', { title: category.name, category, projects });
  } catch (error) {
    next(error);
  }
};
