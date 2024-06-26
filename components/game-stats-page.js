import React, { useEffect, useState } from "react";
import {
    Table,
    TableHeader,
    TableBody,
    TableColumn,
    TableRow,
    TableCell
  } from "@nextui-org/table";
import { HomeNavBar } from './navbar.js'
import { useTheme } from "next-themes";
import ico from '../public/favicon.ico'
import NextImage from "next/image";
import styles from '../styles/Home.module.css'

const getKeyValue = (item, key) => {
    return item[key];
  };

export default function GameStatsPage({gameName, rows, columns, startDate}) {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}> {gameName} </h1>
            <p> Start Date: {startDate}</p>
           
            <Table aria-label={gameName}>
            <TableHeader columns={columns}>
            {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
            </TableHeader>
            <TableBody items={rows}>
            {(item) => (
                <TableRow key={item.key}>
                {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                </TableRow>
            )}
            </TableBody>
        </Table>
      </div>
      )
}