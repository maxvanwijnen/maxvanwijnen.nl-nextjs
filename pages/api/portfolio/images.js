import { query } from '../../../lib/db';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { tag } = req.query;
    
    let sql = 'SELECT * FROM portfolio_images WHERE is_active = 1';
    const params = [];
    
    if (tag && tag !== 'all') {
      sql += ' AND tags = ?';
      params.push(tag);
    }
    
    sql += ' ORDER BY sort_order ASC, created_at DESC';
    
    const images = await query(sql, params);
    
    // Media directory wordt door nginx geserveerd
    const mediaPath = '/media/portfolio/';
      
    const imagesWithUrls = images.map(image => ({
      ...image,
      src: `${mediaPath}${image.filename}`,
      width: image.width,
      height: image.height,
      title: image.title,
      tags: image.tags
    }));
    
    res.status(200).json(imagesWithUrls);
  } catch (error) {
    console.error('Error fetching portfolio images:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
}
