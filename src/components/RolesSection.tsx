import { RoleDepartment } from "@/types";
import Role from "./Role";
import styles from "@/styles/RolesSection.module.css";

export type RolesSectionProps = {
    roleDepartments: RoleDepartment[],
};
const RolesSection = ({ roleDepartments }: RolesSectionProps) => {
    return (
        <div>
            <h2 className={styles.h2}>Roles</h2>
                <p className={styles.p}>
                    Bits of Good is home to engineers and artists. We believe in empowering the
                    non-profits and democratizing technology for social good.
                </p>
            <section className={styles.section}>
                {roleDepartments.map((roleDepartment) => (
                    <Role name={roleDepartment.name} image={roleDepartment.image} briefDescription={roleDepartment.briefDescription} />
                ))}
            </section>
        </div>
    );
}

export default RolesSection;