import React from "react";
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Chip
} from "@material-ui/core";
import useStyles from "../../styles";

const states: any = {
  sent: "success",
  pending: "warning",
  declined: "secondary",
};

export default function TableComponent({ data }: any) {
  const classes: any = useStyles();
  const keys = Object.keys(data[0]).map(i => i.toUpperCase());
  keys.shift(); // delete "id" key

  return (
    <Table className="mb-0">
      <TableHead>
        <TableRow>
          {keys.map(key => (
            <TableCell key={key}>{key}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(({ id, name, email, product, price, date, city, status }: any) => (
          <TableRow key={id}>
            <TableCell className="pl-3 fw-normal">{name}</TableCell>
            <TableCell>{email}</TableCell>
            <TableCell>{product}</TableCell>
            <TableCell>{price}</TableCell>
            <TableCell>{date}</TableCell>
            <TableCell>{city}</TableCell>
            <TableCell>
              <Chip label={status} classes={{root: classes[states[status.toLowerCase()]]}}/>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
