const { cartBusiness } = require("../../business");
const db = require("../../db/models");

jest.mock("../../db/models");

describe("CartBusiness", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Should return cart if exists", async () => {
    db.Cart.findByPk.mockImplementation((id) => Promise.resolve({ id }));

    const id = 1;

    const result = await cartBusiness.find(db, id);

    expect(result).not.toBe(null);
    expect(result.id).toBe(id);
    expect(db.Cart.create).toHaveBeenCalledTimes(0);
  });

  it("Should create cart and return", async () => {
    db.Cart.findByPk.mockImplementation((id) => Promise.resolve(null));
    db.Cart.create.mockImplementation((input) => Promise.resolve(input));

    const id = 2;

    const result = await cartBusiness.find(db, id);

    expect(result).not.toBe(null);
    expect(result.id).toBe(id);
    expect(db.Cart.create).toHaveBeenCalledTimes(1);
  });
});
