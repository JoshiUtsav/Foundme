"use client";

import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import JsonData from "../../public/table.json";

export default function Create_Table() {
  const [data, setdata] = useState<any>([]);

  useEffect(() => {
    setdata(JsonData);
  }, []);

  return (
    <Table>
      <TableCaption>A list of matches found.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>First Name</TableHead>
          <TableHead>Last Name</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Company</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Seniority</TableHead>
          <TableHead>Corporate Phone</TableHead>
          <TableHead>Stage</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item: any, index: any) => (
          <TableRow key={index}>
            <TableCell>{item["First Name"]}</TableCell>
            <TableCell>{item["Last Name"]}</TableCell>
            <TableCell>{item["Title"]}</TableCell>
            <TableCell>{item["Company"]}</TableCell>
            <TableCell>{item["Email"]}</TableCell>
            <TableCell>{item["Seniority"]}</TableCell>
            <TableCell>{item["Corporate Phone"]}</TableCell>
            <TableCell>{item["Stage"]}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
