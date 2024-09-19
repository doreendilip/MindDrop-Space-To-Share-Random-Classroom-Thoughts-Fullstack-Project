export default function Post({id, title, content, authorName}) {
    return (
        <div style={{
            border: '2px solid #4CAF50',
            padding: '20px',
            margin: '20px auto',
            maxWidth: '600px',
            borderRadius: '15px',
            backgroundColor: '#fff',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            fontFamily: "'Comic Sans MS', cursive, sans-serif"
        }}>
            <h3 style={{color: '#4CAF50'}}>{authorName}</h3>
            <h4>{title}</h4>
            <p>{content}</p>
        </div>
    );
}
