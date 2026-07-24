import db from '../db.js';

const getAllOrganizations = async () => {
  try {
    const sql = "SELECT * FROM public.organizations ORDER BY name ASC";
    const result = await db.query(sql);
    return result.rows;
  } catch (error) {
    console.error("Error inside getAllOrganizations model: ", error);
    throw error;
  }
};

export default {
  getAll: getAllOrganizations,
  getAllOrganizations
};
