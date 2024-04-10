import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
	Table,
	TableBody,
	TableHead,
	TableHeader,
	TableRow,
	TableCell,
} from "@/components/ui/table";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import React from "react";

import { adaptSubjects } from "@/adapters/subjects";
import { getStudentSubjects } from "@/services/subjects";
import { groupSubjectsBySemester } from "@/utils/subject";

export default async function Curriculum() {
	const subjects = adaptSubjects(await getStudentSubjects());
	const subjectsBySemester = groupSubjectsBySemester(subjects);

	return (
		<div className="grid w-full grid-cols-1">
			<Card className="flex flex-col">
				<h2 className="mb-2 font-semibold uppercase text-gray-600 dark:text-gray-300">
					PENSUM
				</h2>
				<Table>
					<TableHeader>
						<TableRow className="bg-gray-50 dark:bg-zinc-900">
							<TableHead>Semestre</TableHead>
							<TableHead>Código</TableHead>
							<TableHead>Asignatura</TableHead>
							<TableHead>UC</TableHead>
							<TableHead>Prelación</TableHead>
							<TableHead>Estado</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{subjectsBySemester.map((semester) => (
							<React.Fragment key={semester.number}>
								{semester.subjects.map((subject) => (
									<TableRow key={subject.code}>
										<TableCell>{subject.semester}</TableCell>
										<TableCell>{subject.code}</TableCell>
										<TableCell>{subject.name}</TableCell>
										<TableCell>{subject.uc}</TableCell>
										<TableCell>
											<div className="flex gap-1">
												{subject.neededSubjects.map((neededSubject) => (
													<Tooltip
														key={subject.code + "-" + neededSubject.code}
													>
														<TooltipTrigger asChild>
															<Badge
																variant="outline"
																className="cursor-pointer text-gray-600"
															>
																{neededSubject.code}
															</Badge>
														</TooltipTrigger>
														<TooltipContent>
															<p>{neededSubject.name}</p>
														</TooltipContent>
													</Tooltip>
												))}
											</div>
										</TableCell>
										<TableCell>
											{subject.approved ? (
												<Badge className="bg-blue-800 hover:bg-blue-800 dark:bg-transparent dark:text-zinc-300">
													Aprobada
												</Badge>
											) : (
												""
											)}
										</TableCell>
									</TableRow>
								))}
								<TableRow>
									<TableCell
										colSpan={6}
										className="bg-gray-50 text-center font-bold uppercase text-gray-600 dark:bg-zinc-900 dark:text-zinc-400"
									>
										UC totales: {semester.totalUC}
									</TableCell>
								</TableRow>
							</React.Fragment>
						))}
					</TableBody>
				</Table>
			</Card>
		</div>
	);
}
