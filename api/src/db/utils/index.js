const transactional = async (sequelize, execution) => {
  const t = await sequelize.transaction();
  try {
    const result = await execution();
    t.commit();
    return result;
  } catch (e) {
    return t.rollback();
  }
};

module.exports = { transactional };
