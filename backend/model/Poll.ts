import { DataTypes, Model } from 'sequelize'
const sequelize = require('../config/database')

class Poll extends Model {}

Poll.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        courseId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        folderId: {
            type: DataTypes.STRING,
        },
        publishedAt: {
            type: DataTypes.DATE,
        },
    },
    {
        sequelize,
        modelName: 'Poll',
        indexes: [
            {
                unique: true,
                fields: ['name', 'userId', 'folderId'],
            },
        ],
    }
)

module.exports = Poll
