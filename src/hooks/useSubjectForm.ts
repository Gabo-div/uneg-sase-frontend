import { Subject } from "@/models/subject";
import { AvailableToInscribeSubject } from "@/models/inscription";
import { useEffect, useRef, useState } from "react";

type SelectedSubject = Pick<Subject, "code" | "name" | "uc"> & {
	section: number;
};

export default function useSubjectForm(
	availableSubjects: AvailableToInscribeSubject[],
) {
	const sortedSubjectsRef = useRef(
		availableSubjects.sort(
			(a, b) => b.availableSections.length - a.availableSections.length,
		),
	);

	const [selectedSubjects, setSelectedSubjects] = useState<
		Record<number, SelectedSubject>
	>({});

	const [selectedUC, setSelectedUC] = useState(0);

	const [subjectsToInscribe, setSubjectsToInscribe] = useState<
		SelectedSubject[]
	>([]);

	const handleSubjectChange = (subject: SelectedSubject) => {
		setSelectedSubjects((current) => ({
			...current,
			[subject.code]: subject,
		}));
	};

	const resetSelectedSubjects = () => {
		setSelectedSubjects({});
	};

	useEffect(() => {
		const toInscribe: SelectedSubject[] = [];
		let totalUC = 0;

		Object.values(selectedSubjects).forEach((subject) => {
			if (subject.section === 0) return;
			totalUC += subject.uc;
			toInscribe.push(subject);
		});

		setSubjectsToInscribe(toInscribe);
		setSelectedUC(totalUC);
	}, [selectedSubjects]);

	return {
		sortedSubjects: sortedSubjectsRef.current,
		selectedSubjects,
		subjectsToInscribe,
		selectedUC,
		handleSubjectChange,
		resetSelectedSubjects,
	};
}
