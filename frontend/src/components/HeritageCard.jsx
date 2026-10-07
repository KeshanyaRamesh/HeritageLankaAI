import { MapPin, ArrowUpRight, Crown } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function HeritageCard({site}){ return <motion.article className="site-card" whileHover={{y:-8}}><div className="site-image"><img src={site.coverImage||"/images/placeholder-site.png"} onError={e=>{e.currentTarget.src="/images/placeholder-site.png"}} alt={site.name}/>{site.unescoStatus&&<span><Crown size={14}/> UNESCO</span>}</div><div className="site-body"><small><MapPin size={15}/>{site.district}</small><h3>{site.name}</h3><p>{site.shortDescription}</p><Link to={`/heritage/${site.slug}`}><span>Discover site</span><ArrowUpRight size={17}/></Link></div></motion.article> }
