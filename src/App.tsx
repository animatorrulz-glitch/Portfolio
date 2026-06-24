import { useState } from 'react';
import { 
  TrendingUp, 
  Eye, 
  Users, 
  Award,
  Sparkles,
  Play,
  CheckCircle2,
  Mail,
  ExternalLink,
  FolderOpen
} from 'lucide-react';

// Custom SVG icons for social media
const Instagram = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);



function App() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabLabels: { [key: string]: string } = {
    'overview': 'Overview',
    'case-study': 'Featured Work',
    'skills': 'Skills & Tools',
    'achievements': 'Services & Portfolio'
  };

  const stats = [
    { icon: Eye, label: 'Views Generated', value: '4M+', subtext: 'Across campaigns' },
    { icon: Users, label: 'Followers Grown', value: '20K+', subtext: 'Organic growth' },
    { icon: TrendingUp, label: 'Peak Video Views', value: '2M+', subtext: 'Individual videos' },
    { icon: Award, label: 'Brand Collaborations', value: '2+', subtext: '100% AI-powered' },
  ];

  const coreTools = [
    { name: 'Runway', category: 'Video Generation' },
    { name: 'Kling', category: 'Video Generation' },
    { name: 'Flux', category: 'Image Generation' },
    { name: 'Midjourney', category: 'Image Generation' },
    { name: 'ChatGPT', category: 'AI Assistant' },
    { name: 'CapCut', category: 'Video Editing' },
    { name: 'Adobe Premiere Pro', category: 'Video Editing' },
    { name: 'Canva', category: 'Design' },
  ];

  const services = [
    {
      title: 'AI Influencer Development',
      description: 'Comprehensive character creation, brand identity development, and strategic content planning for photorealistic digital personalities that resonate globally'
    },
    {
      title: 'Cinematic AI Video Production',
      description: 'Studio-quality storytelling content engineered for maximum engagement and audience retention across international markets'
    },
    {
      title: 'Product Advertisement Videos',
      description: 'Premium promotional content for global jewelry, fashion, beauty, and e-commerce brands seeking world-class production value'
    },
    {
      title: 'Social Media Content Systems',
      description: 'Enterprise-grade AI workflows delivering platform-optimized content for Instagram Reels, YouTube Shorts, TikTok, and multi-channel campaigns'
    },
    {
      title: 'UGC-Style Creator Content',
      description: 'Authentic creator-style content strategically designed to build international trust and drive measurable conversions'
    },
    {
      title: 'Brand Content Campaigns',
      description: 'Comprehensive content packages for global product launches, marketing campaigns, and international brand initiatives'
    }
  ];

  const portfolioProjects = [
    {
      title: 'AI Influencer Growth Campaign',
      description: 'Engineered multiple AI-generated influencers from inception, achieving 20,000+ organic followers, 4 million+ views, and strategic brand partnerships across international markets. Content achieved viral performance with 2M+ peak views on individual videos, with global audiences consistently unable to distinguish from traditionally filmed productions.'
    },
    {
      title: 'Luxury Jewelry Brand Campaign',
      description: 'Produced premium advertising content for international jewelry brands utilizing photorealistic AI models and luxury aesthetics. Delivered accelerated production timelines, optimized costs, and world-class visual presentation that significantly increased global social media engagement.'
    },
    {
      title: 'E-Commerce Product Marketing',
      description: 'Partnered with global e-commerce enterprises to create high-converting AI product videos, lifestyle visuals, and promotional content. Delivered premium content at scale with consistent brand identity and measurable engagement improvements across markets.'
    },
    {
      title: 'Enterprise Content Systems',
      description: 'Developed enterprise-grade AI content workflows enabling international businesses to produce weeks of Instagram Reels, YouTube Shorts, and TikTok content in advance. Achieved enhanced posting consistency while significantly reducing production timelines and costs.'
    }
  ];

  const skills = [
    'AI Character Development',
    'AI Influencer Creation',
    'Character Identity Design',
    'Personality & Backstory Development',
    'Consistent Character Branding',
    'AI Image Generation',
    'AI Video Generation',
    'Higgsfield AI (Seedance 2.0)',
    'Image-to-Video Workflows',
    'Face Consistency Techniques',
    'Lip Sync & Character Animation',
    'Prompt Engineering',
    'Cinematic Storytelling',
    'Social Media Growth',
    'Instagram Growth Strategy',
    'YouTube Shorts Strategy',
    'Pinterest Content Strategy',
    'Audience Engagement',
    'Viral Content Research',
    'Content Planning',
    'Brand Collaboration'
  ];

  const achievements = [
    'Generated 4 million+ views across international AI content campaigns',
    'Cultivated 20,000+ organic followers across multiple AI influencer projects globally',
    'Produced viral content achieving 2 million+ views on individual videos',
    'Secured strategic brand partnerships with international companies using AI-generated content',
    'Created premium advertising content for global jewelry and fashion brands',
    'Developed enterprise-grade content systems for international e-commerce businesses',
    'Delivered cinematic AI content indistinguishable from traditional studio production',
    'Built multi-platform optimized content for Instagram, TikTok, YouTube Shorts across all markets',
    'Reduced client content production costs by up to 70% while maintaining world-class quality',
    'Implemented 100% AI-powered production workflows delivering consistent enterprise-level output'
  ];

  const whyWorkWithMe = [
    'Accelerated Global Delivery',
    'Enterprise Cost Optimization',
    'World-Class Visual Quality',
    'Infinitely Scalable Production',
    'Multi-Platform Global Optimization',
    'Award-Level Cinematic Expertise',
    'Data-Driven Measurable ROI',
    '100% AI-Powered Enterprise Workflow'
  ];

  const brandCollaborations = [
    { name: '@myguldasta.com', type: 'Brand Partnership' },
    { name: 'Mukesh Jewelers', type: 'Jewelry Ad Videos' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-pink-600/10 to-blue-600/10 animate-gradient"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
        
        {/* Glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full px-6 py-2.5 mb-8 shadow-lg shadow-purple-500/10">
              <Sparkles className="w-4 h-4 text-purple-300 animate-pulse" />
              <span className="text-purple-100 text-sm font-semibold tracking-wide">AI Content Production & Business Growth</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Creativity.ai
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mt-2 text-4xl md:text-5xl">
                Turning AI Creativity Into Real Business Growth
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We partner with brands, agencies, and businesses worldwide to scale content production through 
              AI-generated videos, AI influencers, product advertisements, and social media content systems
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a 
                href="https://www.instagram.com/itscreativity.ai/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <Instagram className="w-5 h-5" />
                Follow on Instagram
                <ExternalLink className="w-4 h-4" />
              </a>
              
              <a 
                href="https://drive.google.com/drive/folders/1auqfwfMUhBtThUJ-EZvGocj-f6zadAfM"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                <FolderOpen className="w-5 h-5" />
                View Portfolio
                <ExternalLink className="w-4 h-4" />
              </a>
              
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                Get in Touch
              </a>
            </div>

            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 text-gray-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Serving Global Markets • International Collaboration Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:from-white/15 hover:to-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-purple-300" />
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent mb-2">{stat.value}</div>
                  <div className="text-purple-200 font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-400">{stat.subtext}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-10 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-2 shadow-xl">
          {['overview', 'case-study', 'skills', 'achievements'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 min-w-[140px] px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50 scale-105'
                  : 'text-gray-300 hover:text-white hover:bg-white/10 hover:scale-102'
              }`}
            >
              {tabLabels[tab]}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">About Us</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded mb-6"></div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  At Creativity.ai, we partner with global brands, agencies, and businesses to transform their content production through 
                  AI-generated videos, AI influencers, product advertisements, and social media content systems. Our work focuses on 
                  creating content that not only captivates audiences but also delivers measurable, data-driven results.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  We combine cutting-edge artificial intelligence, creative excellence, and strategic storytelling to produce content that 
                  helps brands worldwide capture attention and accelerate growth. Leveraging industry-leading tools including 
                  <span className="text-purple-400 font-semibold"> Higgsfield AI (Seedance 2.0)</span>, Runway, Kling, Flux, and Midjourney, 
                  we deliver high-quality content at scale—from cinematic AI influencers to premium product advertisements and 
                  comprehensive social media campaigns.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-8">What We Create</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="group bg-gradient-to-br from-purple-500/10 via-purple-500/5 to-transparent border border-purple-400/30 rounded-2xl p-6 hover:border-purple-400/60 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-7 h-7 text-purple-300" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-3">AI Influencers</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Photorealistic digital personalities engineered for global audience growth and international brand partnerships
                    </p>
                  </div>
                  <div className="group bg-gradient-to-br from-pink-500/10 via-pink-500/5 to-transparent border border-pink-400/30 rounded-2xl p-6 hover:border-pink-400/60 hover:shadow-xl hover:shadow-pink-500/20 transition-all duration-300">
                    <div className="w-14 h-14 bg-gradient-to-br from-pink-500/20 to-pink-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-7 h-7 text-pink-300" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-3">Cinematic AI Videos</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Premium storytelling content engineered for maximum engagement and audience retention across global markets
                    </p>
                  </div>
                  <div className="group bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-transparent border border-blue-400/30 rounded-2xl p-6 hover:border-blue-400/60 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Award className="w-7 h-7 text-blue-300" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-3">Product Advertisements</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Studio-quality promotional content for international brands and global e-commerce enterprises
                    </p>
                  </div>
                  <div className="group bg-gradient-to-br from-purple-500/10 via-purple-500/5 to-transparent border border-purple-400/30 rounded-2xl p-6 hover:border-purple-400/60 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <TrendingUp className="w-7 h-7 text-purple-300" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-3">Social Media Content</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Multi-platform content optimized for Instagram, TikTok, YouTube Shorts, and Facebook across all regions
                    </p>
                  </div>
                  <div className="group bg-gradient-to-br from-pink-500/10 via-pink-500/5 to-transparent border border-pink-400/30 rounded-2xl p-6 hover:border-pink-400/60 hover:shadow-xl hover:shadow-pink-500/20 transition-all duration-300">
                    <div className="w-14 h-14 bg-gradient-to-br from-pink-500/20 to-pink-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Sparkles className="w-7 h-7 text-pink-300" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-3">UGC-Style Content</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Authentic creator-style content strategically designed to build trust and drive conversions globally
                    </p>
                  </div>
                  <div className="group bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-transparent border border-blue-400/30 rounded-2xl p-6 hover:border-blue-400/60 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle2 className="w-7 h-7 text-blue-300" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-3">Content Systems</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Enterprise-grade AI workflows delivering consistent, high-quality content production at global scale
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'case-study' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">AI Influencer Growth Campaign</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded mb-6"></div>
                <p className="text-gray-300 text-lg mb-6">
                  Creativity.ai has developed multiple AI-generated influencers from the ground up, encompassing character creation, 
                  visual identity development, strategic content planning, cinematic video production, and sophisticated audience growth. 
                  Our international campaigns have generated over 4 million views, cultivated 20,000+ organic followers, and achieved 
                  viral content with 2M+ individual video views—demonstrating that AI-generated personalities can build substantial global 
                  audiences, drive meaningful engagement, and secure strategic brand partnerships worldwide.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-purple-400" />
                  Services Delivered
                </h3>
                <p className="text-gray-300 mb-6">
                  End-to-end AI influencer development including strategic character creation, brand identity design, premium video production, 
                  and data-driven growth optimization.
                </p>
                
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">AI Character Development</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">AI Influencer Branding</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Cinematic AI Video Production</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Social Media Content Creation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Prompt Engineering</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Content Strategy</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Audience Growth Optimization</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-white font-semibold">Instagram Profile:</span>
                    <a 
                      href="https://www.instagram.com/uff.tania" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 inline-flex items-center gap-1"
                    >
                      @uff.tania
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Results</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">20K+</div>
                    <div className="text-white font-semibold text-sm">Followers Grown</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-pink-400 mb-2">4M+</div>
                    <div className="text-white font-semibold text-sm">Views Generated</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">2M+</div>
                    <div className="text-white font-semibold text-sm">Peak Video Views</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-pink-400 mb-2">Multiple</div>
                    <div className="text-white font-semibold text-sm">Brand Collaborations</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center col-span-2 md:col-span-2">
                    <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
                    <div className="text-white font-semibold text-sm">AI-Powered Production</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Brand Partnerships</h3>
                <div className="space-y-4">
                  {brandCollaborations.map((brand, index) => (
                    <div 
                      key={index}
                      className="bg-gradient-to-r from-purple-500/10 to-transparent border border-purple-500/20 rounded-xl p-6 flex items-center justify-between"
                    >
                      <div>
                        <div className="text-white font-semibold text-lg">{brand.name}</div>
                        <div className="text-purple-300">{brand.type}</div>
                      </div>
                      <Award className="w-8 h-8 text-purple-400" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-green-400" />
                  Impact
                </h3>
                <p className="text-gray-300">
                  Our content consistently achieves exceptional engagement rates while maintaining photorealistic visuals and premium 
                  cinematic storytelling. <span className="text-green-400 font-semibold">Global audiences across markets consistently 
                  cannot distinguish our AI-generated content from traditionally filmed productions</span>. This world-class quality 
                  is fundamental to building authentic international audience connections and securing strategic brand partnerships worldwide.
                </p>
              </div>

              <div className="mt-12">
                <h2 className="text-3xl font-bold text-white mb-4">Experience & Achievements</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded mb-6"></div>
                
                <div className="bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 rounded-xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-3">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Creativity.ai - AI Content Production Studio</h3>
                      <p className="text-purple-300">2024 – Present</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                        <p className="text-gray-300">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Technical Skills & Expertise</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded mb-6"></div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 rounded-xl p-4 hover:from-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-white font-medium">{skill}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-8 mt-8">
                <h3 className="text-2xl font-bold text-white mb-6">Creative Tools</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {coreTools.map((tool, index) => (
                    <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-4 flex items-center justify-between">
                      <div>
                        <div className="text-white font-semibold">{tool.name}</div>
                        <div className="text-purple-300 text-sm">{tool.category}</div>
                      </div>
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Featured: Higgsfield AI (Seedance 2.0)</h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-3">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">Industry-Leading AI Video Generation</div>
                    <div className="text-purple-300">Current most powerful model for cinematic content</div>
                  </div>
                </div>
                <p className="text-gray-300">
                  Deep expertise in prompt engineering and optimization for maximum quality output, creating content so 
                  realistic that viewers can't distinguish it from real footage.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Services Offered</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded mb-6"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 rounded-xl p-6 hover:from-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                      <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                    </div>
                    <p className="text-gray-300 ml-9">{service.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <h2 className="text-3xl font-bold text-white mb-4">Portfolio Projects</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded mb-6"></div>
                
                <div className="space-y-6">
                  {portfolioProjects.map((project, index) => (
                    <div
                      key={index}
                      className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                    >
                      <h3 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2">
                        <Sparkles className="w-6 h-6 text-purple-400" />
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-lg">{project.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-8 mt-8">
                <h3 className="text-2xl font-bold text-white mb-6">Why Work With Me?</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {whyWorkWithMe.map((reason, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-white font-medium">{reason}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="relative bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 text-center overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 animate-gradient"></div>
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance">Let's Create Something Extraordinary</h2>
            <p className="text-gray-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Ready to transform your content production with cutting-edge AI? We partner with brands worldwide 
              on projects, strategic collaborations, and long-term international partnerships.
            </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://www.instagram.com/itscreativity.ai/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/20 hover:scale-105 transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
              Instagram
            </a>
            <a 
              href="https://drive.google.com/drive/folders/1auqfwfMUhBtThUJ-EZvGocj-f6zadAfM"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
            >
              <FolderOpen className="w-5 h-5" />
              Portfolio Drive
            </a>
            <a 
              href="mailto:itscreativity.ai@gmail.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
          </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/20 bg-gradient-to-b from-transparent to-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <p className="text-gray-300 mb-2 text-lg font-medium">© 2024 Creativity.ai • Global AI Content Production Studio</p>
            <p className="text-sm text-gray-400 mb-6">AI Influencers • Premium Advertisements • Cinematic Content • Multi-Platform Solutions • Serving Clients Worldwide</p>
            <a 
              href="https://www.instagram.com/itscreativity.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 transition-all duration-300 group"
            >
              <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Follow @itscreativity.ai on Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;