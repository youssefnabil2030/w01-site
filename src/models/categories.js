import db from '../db.js';

const CATEGORY_IMAGES = {
  'Environmental Cleanup': 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500&auto=format&fit=crop&q=80',
  'Education & Tutoring': 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&auto=format&fit=crop&q=80',
  'Community Outreach': 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=500&auto=format&fit=crop&q=80',
  'Disaster Relief': 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=500&auto=format&fit=crop&q=80'
};

const FALLBACK_POOL = [
  'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=500&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=500&auto=format&fit=crop&q=80'
];

const getAllCategories = async () => {
  try {
    const sql = "SELECT * FROM public.categories ORDER BY name ASC";
    const result = await db.query(sql);

    return result.rows.map((category, index) => {
      const matchedImage = CATEGORY_IMAGES[category.name] || FALLBACK_POOL[index % FALLBACK_POOL.length];
      return {
        ...category,
        image_url: matchedImage
      };
    });
  } catch (error) {
    console.error("Error inside getAllCategories model: ", error);
    throw error;
  }
};

export default {
  getAll: getAllCategories,
  getAllCategories
};
