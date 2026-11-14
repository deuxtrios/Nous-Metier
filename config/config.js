const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
    mongoUri: process.env.MONGODB_URI || "mongodb+srv://jlagroll_db_user:9CRHERbnm5XQazpC@cluster0.s1nwupk.mongodb.net/Nous_Metier?retryWrites=true&w=majority" || process.env.MONGO_HOST || 'mongodb://' + (process.env.IP || 'localhost') + ':' + (process.env.MONGO_PORT || '27017') + '/mernproject'
}

export default config