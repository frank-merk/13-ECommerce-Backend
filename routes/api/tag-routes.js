const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll();
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }

  // find all tags
  // be sure to include its associated Product data
});

router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll();
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
    include: [{ model: Product, through: ProductTag, as: 'product_categories' }]
  });

  if (!tagData) {
    res.status(404).json({ message: "no tag data found with this id!" })
    return;
  }

  res.status(200).json(tagData);
  } catch (err) {
  res.status(500).json(err);
  }
});


router.post('/', (req, res) => {
  try{
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);

  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
