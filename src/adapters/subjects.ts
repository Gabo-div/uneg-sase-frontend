import {
	RegisteredSubject,
	Subject,
	registeredSubjectSchema,
	subjectSchema,
} from "@/models/subject";

export const adaptSubject = (subject: any): Subject => {
	return subjectSchema.parse(subject);
};

export const adaptSubjects = (subjects: any[]): Subject[] => {
	return subjects.map((subject) => adaptSubject(subject));
};

export const adaptRegisteredSubject = (subject: any): RegisteredSubject => {
	return registeredSubjectSchema.parse(subject);
};

export const adaptRegisteredSubjects = (
	subjects: any[],
): RegisteredSubject[] => {
	return subjects.map((subject) => adaptRegisteredSubject(subject));
};
