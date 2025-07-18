import { Mail, Phone, FileText, Users, Pen, Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const Index = () => {
  const services = [
    {
      icon: FileText,
      title: "Blog & Article Writing",
      description: "Konten blog yang SEO-friendly dan engaging untuk meningkatkan traffic website Anda."
    },
    {
      icon: Pen,
      title: "Copywriting for Landing Pages", 
      description: "Copy yang persuasif untuk meningkatkan konversi dan penjualan produk/layanan Anda."
    },
    {
      icon: Users,
      title: "Product Descriptions",
      description: "Deskripsi produk yang menarik dan informatif untuk meningkatkan penjualan online."
    },
    {
      icon: Star,
      title: "Social Media Captions",
      description: "Caption yang kreatif dan engaging untuk media sosial yang meningkatkan engagement."
    },
    {
      icon: FileText,
      title: "Script for Reels / TikTok",
      description: "Script video pendek yang viral dan menarik untuk platform media sosial."
    }
  ]

  const testimonials = [
    {
      text: "Tulisannya rapi dan sesuai brief banget. Langsung naikin engagement IG kami.",
      client: "Klien A"
    },
    {
      text: "Fast response, dan hasilnya bikin puas. Akan repeat order lagi!",
      client: "Klien B"
    },
    {
      text: "Kualitas tulisan sangat bagus, deadline selalu tepat waktu. Recommended!",
      client: "Klien C"
    }
  ]

  const writingSamples = [
    {
      title: "5 Tips Menulis yang Nggak Bikin Jenuh",
      type: "Blog Article",
      link: "#"
    },
    {
      title: "Panduan Freelance Pemula",
      type: "PDF Guide",
      link: "#"
    },
    {
      title: "Konten IG untuk brand X",
      type: "Social Media Content",
      link: "#"
    }
  ]

  const handleWhatsApp = () => {
    window.open("https://wa.me/yourphonenumber", "_blank")
  }

  const handleEmail = () => {
    window.location.href = "mailto:your.email@example.com"
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-writer-primary">ContentWriter</h2>
            <div className="hidden md:flex space-x-6">
              <a href="#about" className="text-foreground hover:text-writer-primary transition-colors">About</a>
              <a href="#services" className="text-foreground hover:text-writer-primary transition-colors">Services</a>
              <a href="#samples" className="text-foreground hover:text-writer-primary transition-colors">Portfolio</a>
              <a href="#testimonials" className="text-foreground hover:text-writer-primary transition-colors">Testimonials</a>
              <a href="#contact" className="text-foreground hover:text-writer-primary transition-colors">Contact</a>
            </div>
            <Button variant="default" size="sm" onClick={handleWhatsApp}>
              Let's Work Together
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="text-writer-accent">[Namamu]</span>!
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              I help brands and businesses grow through powerful, engaging writing. 
              <br />Let's tell your story with words that matter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg" 
                onClick={handleWhatsApp}
                className="bg-white text-writer-primary hover:bg-white/90 shadow-button"
              >
                <Phone className="mr-2 h-5 w-5" />
                Let's Work Together
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-writer-primary"
                onClick={() => document.getElementById('samples')?.scrollIntoView({behavior: 'smooth'})}
              >
                <FileText className="mr-2 h-5 w-5" />
                View My Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">About Me</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a freelance writer with a passion for storytelling, content strategy, and helping businesses connect with their audience. Whether it's blog posts, social media content, or sales copy — I craft messages that convert.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-writer-neutral">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">My Services</h2>
            <p className="text-lg text-muted-foreground">Layanan penulisan profesional untuk kebutuhan bisnis Anda</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <service.icon className="h-10 w-10 text-writer-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Writing Samples Section */}
      <section id="samples" className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Writing Samples</h2>
            <p className="text-lg text-muted-foreground">Contoh karya terbaik yang telah saya buat</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {writingSamples.map((sample, index) => (
              <Card key={index} className="shadow-card hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <FileText className="h-8 w-8 text-writer-primary flex-shrink-0" />
                    <span className="text-sm text-writer-primary bg-writer-primary/10 px-2 py-1 rounded-full">
                      {sample.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground group-hover:text-writer-primary transition-colors">
                    {sample.title}
                  </h3>
                  <div className="flex items-center text-writer-primary font-medium">
                    <span className="text-sm">Lihat Detail</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-writer-neutral">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Testimonials</h2>
            <p className="text-lg text-muted-foreground">Apa kata klien tentang layanan saya</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-writer-accent text-writer-accent" />
                    ))}
                  </div>
                  <blockquote className="text-foreground mb-4 leading-relaxed italic">
                    "{testimonial.text}"
                  </blockquote>
                  <cite className="text-writer-primary font-semibold">— {testimonial.client}</cite>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Contact</h2>
              <p className="text-xl text-muted-foreground">Tertarik kerja sama?</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 rounded-lg bg-writer-neutral">
                  <Mail className="h-6 w-6 text-writer-primary" />
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground">your.email@example.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 rounded-lg bg-writer-neutral">
                  <Phone className="h-6 w-6 text-writer-primary" />
                  <div>
                    <h3 className="font-semibold text-foreground">WhatsApp</h3>
                    <p className="text-muted-foreground">+62 812-3456-7890</p>
                  </div>
                </div>
                <div className="pt-4">
                  <Button 
                    onClick={handleWhatsApp} 
                    className="w-full shadow-button"
                    size="lg"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Hubungi via WhatsApp
                  </Button>
                </div>
              </div>

              {/* Contact Form */}
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Nama</label>
                  <Input placeholder="Masukkan nama Anda" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                  <Input type="email" placeholder="nama@email.com" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Pesan</label>
                  <Textarea 
                    placeholder="Ceritakan project yang Anda butuhkan..."
                    className="min-h-[120px]"
                  />
                </div>
                <Button className="w-full shadow-button" size="lg" onClick={handleEmail}>
                  <Mail className="mr-2 h-5 w-5" />
                  Kirim Pesan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-writer-dark text-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/80">
            © 2024 [Namamu] - Freelance Content Writer. Made with ❤️ for better content.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Index
