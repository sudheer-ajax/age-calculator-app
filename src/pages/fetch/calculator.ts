export default async function getAge( dateOfBirth: string) {
    try {
        const res = await fetch(`/api/dob-calculator?userDOB=${dateOfBirth}`);
        return await res.json();
    } catch (err) {
        return err
    }
}
