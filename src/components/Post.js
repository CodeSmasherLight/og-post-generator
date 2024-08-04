import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

const Post = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [ogImage, setOgImage] = useState('');
  const postRef = useRef(null);

  const generateOgImage = async () => {
    if (postRef.current) {
      const canvas = await html2canvas(postRef.current, {
        width: 1200,
        height: 630,
        scale: 1,
        useCORS: true 
      });
      const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
      const url = URL.createObjectURL(blob);
      setOgImage(url);
      saveAs(blob, 'og-image.png');
    }
  };

  return (
    <div>
      <Helmet>
        {ogImage && <meta property="og:image" content={ogImage} />}
      </Helmet>
      <div className="post-form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button onClick={generateOgImage}>Generate PNG</button>
      </div>
      <div className="post-preview" ref={postRef}>
        <h1>{title}</h1>
        <p>{content}</p>
        {image && <img src={image} alt="Post" crossOrigin="anonymous" />}
      </div>
    </div>
  );
};

export default Post;