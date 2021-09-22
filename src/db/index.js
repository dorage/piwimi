import { Pool } from 'pg';

const connectionString =
    'postgresql://postgres:admin@localhost:5432/piwimi_local';

const pool = new Pool({
    connectionString,
});

export const poolQuery = {};

export default pool;
