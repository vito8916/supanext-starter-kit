import {Button} from "@/components/ui/button";
import Link from "next/link";
import {ArrowRight, Check, Code2, Sparkles, Wand2} from "lucide-react";
import {Card} from "@/components/ui/card";

export default function Home() {
  return (
      <div className="min-h-screen bg-background">
          {/* Hero Section */}
          <div className="relative">
              <div className="absolute inset-0 bg-[url('/pattern-7.svg')] bg-cover opacity-50" />
              <div className="relative z-10">
                  <header className="container mx-auto px-4 py-6">
                      <nav className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                                  <Wand2 className="h-4 w-4 text-background" />
                              </div>
                              <span className="text-xl font-bold">SupaNextKit</span>
                          </div>
                          <div className="flex items-center gap-4">
                              <Link href="/sign-in">
                                  <Button variant="ghost">Sign In</Button>
                              </Link>
                              <Link href="/sign-up">
                                  <Button className="bg-primary hover:bg-primary/90 text-background">
                                      Get Started
                                  </Button>
                              </Link>
                          </div>
                      </nav>
                  </header>

                  <main className="container mx-auto px-4 py-20">
                      <div className="max-w-3xl mx-auto text-center">
                          <h1 className="text-5xl font-bold mb-6">
                              Transform Your Designs into{" "}
                              <span className="text-primary">Perfect Code</span>
                          </h1>
                          <p className="text-xl text-muted-foreground mb-8">
                              Generate precise coding prompts from your designs using advanced AI.
                              Save time and ensure consistency in your development workflow.
                          </p>
                          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                              <Link href="/auth/sign-up">
                                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-background gap-2">
                                      Start Free Trial
                                      <ArrowRight className="h-4 w-4" />
                                  </Button>
                              </Link>
                              <Link href="/dashboard">
                                  <Button size="lg" variant="outline" className="gap-2">
                                      View Demo
                                      <Sparkles className="h-4 w-4" />
                                  </Button>
                              </Link>
                          </div>
                      </div>
                  </main>
              </div>
          </div>

          {/* Features Section */}
          <section className="py-20 bg-secondary">
              <div className="container mx-auto px-4">
                  <div className="text-center mb-16">
                      <h2 className="text-3xl font-bold mb-4">How It Works</h2>
                      <p className="text-muted-foreground max-w-2xl mx-auto">
                          Our AI-powered platform simplifies the process of turning designs into
                          code by generating precise, context-aware prompts.
                      </p>
                  </div>

                  <div className="grid gap-8 md:grid-cols-3">
                      <Card className="p-6 bg-background/50">
                          <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                              <Code2 className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="text-xl font-bold mb-2">Smart Analysis</h3>
                          <p className="text-muted-foreground">
                              Upload your design and our AI analyzes patterns, layouts, and
                              technical requirements.
                          </p>
                      </Card>

                      <Card className="p-6 bg-background/50">
                          <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                              <Wand2 className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="text-xl font-bold mb-2">AI Optimization</h3>
                          <p className="text-muted-foreground">
                              Our AI generates optimized prompts that ensure accurate and
                              efficient code implementation.
                          </p>
                      </Card>

                      <Card className="p-6 bg-background/50">
                          <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                              <Sparkles className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="text-xl font-bold mb-2">Code Context</h3>
                          <p className="text-muted-foreground">
                              Get framework-specific prompts with relevant code snippets and
                              examples.
                          </p>
                      </Card>
                  </div>
              </div>
          </section>

          {/* Benefits Section */}
          <section className="py-20">
              <div className="container mx-auto px-4">
                  <div className="max-w-3xl mx-auto">
                      <h2 className="text-3xl font-bold mb-12 text-center">
                          Why Choose Promptify?
                      </h2>
                      <div className="space-y-6">
                          {[
                              {
                                  title: "Save Development Time",
                                  description:
                                      "Reduce the time spent translating designs into code with AI-generated prompts",
                              },
                              {
                                  title: "Maintain Consistency",
                                  description:
                                      "Ensure consistent coding patterns and standards across your projects",
                              },
                              {
                                  title: "Framework Agnostic",
                                  description:
                                      "Support for multiple frameworks and libraries including React, Vue, and Angular",
                              },
                              {
                                  title: "Free to Start",
                                  description:
                                      "Begin with 3 free prompts to experience the power of AI-assisted development",
                              },
                          ].map((benefit) => (
                              <div key={benefit.title} className="flex gap-4 items-start">
                                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                                      <Check className="h-4 w-4 text-primary" />
                                  </div>
                                  <div>
                                      <h3 className="font-medium mb-1">{benefit.title}</h3>
                                      <p className="text-muted-foreground">
                                          {benefit.description}
                                      </p>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>
              </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-secondary relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/pattern-7.svg')] bg-cover opacity-50" />
              <div className="relative z-10 container mx-auto px-4 text-center">
                  <h2 className="text-3xl font-bold mb-4">
                      Ready to Transform Your Development Workflow?
                  </h2>
                  <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                      Join thousands of developers who are already using Promptify to
                      streamline their development process.
                  </p>
                  <Link href="/auth/sign-up">
                      <Button size="lg" className="bg-primary hover:bg-primary/90 text-background gap-2">
                          Get Started for Free
                          <ArrowRight className="h-4 w-4" />
                      </Button>
                  </Link>
              </div>
          </section>

          {/* Footer */}
          <footer className="py-8 border-t border-border">
              <div className="container mx-auto px-4">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                      <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                              <Wand2 className="h-4 w-4 text-background" />
                          </div>
                          <span className="text-xl font-bold">SupaNext Kit</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                          © 2024 Promptify. All rights reserved.
                      </div>
                  </div>
              </div>
          </footer>
      </div>

  );
}
