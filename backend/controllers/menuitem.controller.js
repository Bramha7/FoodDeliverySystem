
import { MenuItem } from "../model/auth/menu_items.model.js"

const addMenuItem = async (req, res) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({
      success: false,
      message: "All field are required"
    })
  }
  const { name, description, price, category } = req.body
  const images = req.files.map((file) => file.path)
  if (!name || !description || !price || !category) {
    return res.status(400).json({
      success: false,
      message: "All fields are required"
    })
  }

  await MenuItem.create({
    name,
    description,
    price,
    category,
    images
  })

  res.status(200).json({
    success: true,
    message: "Items added Successfully"
  })
}

const getAllMenuItems = async (req, res) => {
  const items = await MenuItem.find().lean();
  res.status(200).json({
    success: true,
    message: "Data fetched Successfully",
    data: items
  })

}


const removeMenuItem = async (req, res) => {
  const id = req.params.menuId
  await MenuItem.findByIdAndDelete(id)
  if (!id) {
    return res.status(400).json({
      success: false,
      message: "Deletion failed"
    })

  }

  res.status(200).json({
    success: true,
    message: "Item deleted successully"
  })


}


const editMenuItem = async (req, res) => {
  const { name, description, price, category, available } = req.body
  if (!name || !description || !price || !category) {
    return res.status(400).json({
      success: false,
      message: "All fields are required"
    })
  }

  const id = req.params.menuId
  if (!id) {
    return res.status(400).json({
      message: "Cannot find Id",
      success: false
    })
  }
  const edit = await MenuItem.findByIdAndUpdate(id);
  edit.name = name;
  edit.description = description,
    edit.price = price,
    edit.category = category
  if (available !== undefined) {
    edit.available = available
    await edit.save()
  }
  await edit.save()

  res.status(200).json({
    success: true,
    message: "Item edited successfully"
  })






}

export { addMenuItem, getAllMenuItems, removeMenuItem, editMenuItem } 
