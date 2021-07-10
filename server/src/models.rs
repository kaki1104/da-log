use super::schema::posts;

#[derive(Queryable, Serialize, Debug)]
pub struct User {
    pub id: i32,
    pub name: String,
    pub user_id: i32,
    pub entry_date_id: i32;
    pub created_at: chrono::DateTime<chrono::Utc>,
    pub updated_at: chrono::DateTime<chrono::Utc>,
}

#[derive(Queryable, Serialize, Debug)]
pub struct Diary {
    pub id: i32,
    pub title: String,
    pub description: String,
    pub created_user_id: i32;
    pub created_at: chrono::DateTime<chrono::Utc>,
    pub updated_at: chrono::DateTime<chrono::Utc>,
}

#[derive(Queryable, Serialize, Debug)]
pub struct Entry {
    pub id: i32,
    pub body: String,
    pub user_id: i32,
    pub entry_date_id: i32;
    pub created_at: chrono::DateTime<chrono::Utc>,
    pub updated_at: chrono::DateTime<chrono::Utc>,
}

#[derive(Queryable, Serialize, Debug)]
pub struct Hashtag {
    pub id: i32,
    pub name: String,
    pub color: String,
    pub created_at: chrono::DateTime<chrono::Utc>,
    pub updated_at: chrono::DateTime<chrono::Utc>,
}

#[derive(Insertable, Deserialize, Debug)]
#[table_name = "posts"]
pub struct NewPost {
    pub title: String,
    pub body: String,
}