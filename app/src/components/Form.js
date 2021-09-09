import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

export default function Form(props) {

  const {
    team,
    setTeam
  } = props

  // Schema ===
  const schema = yup.object().shape({
    name: yup
      .string()
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
      .required(),
    email: yup
      .string()
      .email()
      .required(),
    role: yup
      .string()
      .oneOf(["student", "team lead", "instructor"])
      .required(),
  })

  // useForm Hook ===
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  })

  // handleSubmit
  const onSubmit = data => {
    setTeam([
      ...team,
      data
    ])
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Name:
        <input {...register("name")}/>
      </label>
      <p>{errors.name?.message}</p>
      <label>
        Email:
        <input {...register("email")}/>
      </label>
      <p>{errors.email?.message}</p>
      <label>
        Role:
        <select {...register("role")}>
          <option selected value="none">None</option>
          <option value="student">Student</option>
          <option value="team lead">Team Lead</option>
          <option value="instructor">Instructor</option>
        </select>
      </label>
      <p>{errors.role?.message}</p>
      <input type="submit"/>
    </form>
  )
}
