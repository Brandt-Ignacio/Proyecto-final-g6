const express = require ("express");
const router = express.Router();
const Note = require("../models/Note");

router
.route("/api/notes")
.get((req, res)=>{
  Note.find((err,notes)=> {
    res.json(notes);
  });
})
.post((req, res)=>{
    const note = new Note({
      title: req.body.title,
      text: req.body.text
    });
    note.save((err,note)=> {
      res.json(note);
    })
  });

router
.route("api/notes/:id")
.get((req,res)=> {
  Note.find({ id: req.params.id},(err,note) => {
    res.json(note);
  });
})
.put('/notes/:id', (req, res, next) => {
  const note = {
    title: req.body.title,
    text: req.body.text,
    updatedAt: Date.now()
  };
  const options = {
    new: true,
    omitUndefined: true
  };
  Note.findByIdAndUpdate(req.params.id, note, options).exec((err, note) => {
    if (err) return next(err);
    if (!note) return res.status(404).json({ msg: 'Not found' });
    res.status(200).json(note);
  });
});

.delete((req,res) => {
  Note.findByIDAndRemove(req.params.id, (err)=> {
    res.json({msg: 'nota borrada'});
  })
});

module.exports = router;
