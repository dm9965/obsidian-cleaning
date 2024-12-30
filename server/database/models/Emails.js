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
            to : {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isEmail: true
                }
            },
            subject: {
                type: DataTypes.STRING,
                allowNull: false
            },
            message: {
                type: DataTypes.JSON
            }
        }
    )
    Emails.sync();
    return Emails;
}
