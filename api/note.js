// archivo /api/note.js
const express = require('express');
const router = express.Router();
const Note = require('../models/Note');

router
  .route('/api/notes')
  // buscar todas las notas
  .get((req, res) => {
    Note.find((err, notes) => {
      res.json(notes);
    })
  })
  // crear una nota usando los datos de req.body
  .post((req, res) => {
    const note = new Note({
      title: req.body.title,
      text: req.body.text
    });
    note.save((err, note) => {
      res.json(note);
    })
  });

router
  .route('/api/notes/:id')
  // buscar una nota por id
  .get((req, res) => {
    Note.find({ id: req.params.id }, (err, note) => {
      res.json(note);
    });
  })

  .put((req, res, ) => {
    const id= req.params.id;
    const {title,text } =req.body;
    const note = {title,text};
})

  .delete((req, res, next) => {
  Note.find({ id: req.params.id }, (err, note) => {
      if (err) return next(err);
      if (!note) return res.status(404).json({ msg: 'Not found' });
      res.status(200).json({ msg: 'Delete OK' });
    });
  });

module.exports = router;
