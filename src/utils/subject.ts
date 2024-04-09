import { Subject } from "@/models/subject"

type SemesterInfo = {
	number: number
	totalUC: number
	subjects: SubjectInfo[]
}

type SubjectInfo = Subject & {
	neededSubjects: Subject[]
}

type SubjectsCategories = {
	pending: Subject[]
	approved: Subject[]
	failed: Subject[]
}

export const groupSubjectsBySemester = (
	subjects: Subject[],
): SemesterInfo[] => {
	const subjectsBySemester: SemesterInfo[] = []

	const subjectsMap = new Map<number, Subject>()

	subjects.forEach((subject) => {
		subjectsMap.set(subject.code, subject)
	})

	for (const subject of subjects) {
		const index = subject.semester - 1

		if (!subjectsBySemester[index]) {
			subjectsBySemester[index] = {
				number: subject.semester,
				totalUC: subject.uc,
				subjects: [],
			}
		}

		subjectsBySemester[index].totalUC += subject.uc
		subjectsBySemester[index].subjects.push({
			...subject,
			neededSubjects: subject.needed
				.map((neededSubjectCode) => subjectsMap.get(neededSubjectCode))
				.filter((subject) => subject !== undefined) as Subject[],
		})
	}

	return subjectsBySemester
}

export const groupSubjectsByCategory = (
	subjects: Subject[],
): SubjectsCategories => {
	const subjectsByCategory: SubjectsCategories = {
		pending: [],
		approved: [],
		failed: [],
	}

	for (const subject of subjects) {
		if (subject.approved) {
			subjectsByCategory.approved.push(subject)
		} else {
			subjectsByCategory.pending.push(subject)
		}

		if (subject.timesFailed > 0) {
			subjectsByCategory.failed.push(subject)
		}
	}

	return subjectsByCategory
}
