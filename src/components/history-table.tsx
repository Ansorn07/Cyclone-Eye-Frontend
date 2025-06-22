'use client'

import { useState, useMemo } from 'react';
import { historyData } from "@/lib/data";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function HistoryTable() {
    const [nameFilter, setNameFilter] = useState('');
    const [yearFilter, setYearFilter] = useState('all');

    const years = useMemo(() => ['all', ...Array.from(new Set(historyData.map(d => d.year.toString()))).sort((a,b) => Number(b) - Number(a))], []);

    const filteredData = useMemo(() => {
        return historyData.filter(item => {
            const nameMatch = item.name.toLowerCase().includes(nameFilter.toLowerCase());
            const yearMatch = yearFilter === 'all' || item.year.toString() === yearFilter;
            return nameMatch && yearMatch;
        });
    }, [nameFilter, yearFilter]);

    return (
        <div>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
                <Input
                    placeholder="Filter by name..."
                    value={nameFilter}
                    onChange={(e) => setNameFilter(e.target.value)}
                    className="max-w-sm"
                />
                <Select value={yearFilter} onValueChange={setYearFilter}>
                    <SelectTrigger className="w-full md:w-[180px]">
                        <SelectValue placeholder="Filter by year" />
                    </SelectTrigger>
                    <SelectContent>
                        {years.map(year => (
                            <SelectItem key={year} value={year}>{year === 'all' ? 'All Years' : year}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            <div className="rounded-md border">
              <Table>
                  <TableHeader>
                      <TableRow>
                          <TableHead>Cyclone Name</TableHead>
                          <TableHead>Year</TableHead>
                          <TableHead>Region</TableHead>
                          <TableHead>Affected Areas</TableHead>
                          <TableHead>Damage (USD)</TableHead>
                      </TableRow>
                  </TableHeader>
                  <TableBody>
                      {filteredData.length > 0 ? (
                        filteredData.map(item => (
                            <TableRow key={item.id}>
                                <TableCell className="font-medium">{item.name}</TableCell>
                                <TableCell>{item.year}</TableCell>
                                <TableCell>{item.region}</TableCell>
                                <TableCell>{item.affected_areas}</TableCell>
                                <TableCell className="font-code">{item.damage_usd}</TableCell>
                            </TableRow>
                        ))
                      ) : (
                        <TableRow>
                            <TableCell colSpan={5} className="h-24 text-center">
                                No results found.
                            </TableCell>
                        </TableRow>
                      )}
                  </TableBody>
              </Table>
            </div>
        </div>
    )
}
