import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import * as userModel from '../models/userModel.js';

export const getUsers = async (req, res) => {
  const users = await userModel.getUsers();
  res.json(users);
}

export const getUser = async (req, res) => {
  const user = await userModel.getUser(req.params.id);
  res.json(user);
}

export const createUser = async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  console.log(hashedPassword);
  const newUser = await userModel.createUser({
    ...req.body, 
    password: hashedPassword
  });
  res.json(newUser);
}

export const updateUser = async (req, res) => {
  const updatedUser = await userModel.updateUser(req.params.id, req.body);
  res.json(updatedUser);
}

export const deleteUser = async (req, res) => {
  const deletedUser = await userModel.deleteUser(req.params.id);
  res.json(deletedUser);
}

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(500).json({ message: 'Invalid credentials' });

  const user = await userModel.getUserByEmail(email);
  
  const authenticated = await bcrypt.compare(password, user?.password);
  if (!authenticated) return res.status(401).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ 
    id: user.id, 
    email: user.email,
    role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ message: 'Login successful', token });
}
