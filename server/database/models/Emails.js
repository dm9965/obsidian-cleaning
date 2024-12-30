module.exports = (sequelize, DataTypes) => {
    const Emails = sequelize.define(
        'Emails',
        {
            id: {
                type: DataTypes.INTEGER,
                unique: true,
                primaryKey: true,
                autoIncrement: true,
            },
            firstName: DataTypes.STRING,
            lastName: DataTypes.STRING,
            companyName: DataTypes.STRING,
            emailAddress: {
                type: DataTypes.STRING,
                validate: { isEmail: true }
            },
            serviceRequested: DataTypes.STRING,
            additionalComments: DataTypes.TEXT,
            date: DataTypes.DATE
        }
    )
    Emails.sync();
    return Emails;
}
