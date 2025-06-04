import { Category } from "@/models";
import { ApiResponse } from "@/utils";
import { Request, Response } from "express";

const getSingleByAdmin = async (req: Request, res: Response) => {
  const { slug } = req.params;

  const query: any = {
    where: { slug },
    attributes: ["id", "title", "slug", "createdAt", "updatedAt"],
  };

  const blogCategory = await Category.findOne(query);

  new ApiResponse({
    status: 200,
    message: "Blog category retrieved successfully",
    data: blogCategory,
  }).send(res);
};

export default getSingleByAdmin;