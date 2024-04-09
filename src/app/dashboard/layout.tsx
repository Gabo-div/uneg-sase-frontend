import { adaptUser } from "@/adapters/user"
import DashboardClientLayout from "@/layouts/DashboardClientLayout"
import DashboardMenu from "@/layouts/DashboardMenu"
import { getStudentUser } from "@/services/user"

export default async function DashboardLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	const studentUser = adaptUser(await getStudentUser())

	const { name, secondName, lastName, secondLastName } =
		studentUser.data.personalData

	const username = `${name} ${secondName} ${lastName} ${secondLastName}`

	return (
		<DashboardClientLayout
			name={username}
			menu={<DashboardMenu />}
			page={children}
		/>
	)
}
