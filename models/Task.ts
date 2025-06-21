import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  id: String,
  text: String,
  createdAt: Date,
});

const taskSchema = new mongoose.Schema({
  taskTitle: { type: String, required: true },
  taskDetails: String,
  status: { type: String, enum: ['Todo', 'In Progress', 'Done'], default: 'Todo' },
  priority: { type: String, enum: ['Low', 'Medium', 'High'], default: 'Medium' },
  dueDate: Date,
  nextActionDate: Date,
  lastUpdated: Date,
  comments: [commentSchema],
});

export default mongoose.model('Task', taskSchema);
