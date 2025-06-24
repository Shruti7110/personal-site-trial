import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/github/projects", async (req, res) => {
    try {
      const response = await fetch("https://api.github.com/users/Shruti7110/repos");
      if (!response.ok) {
        throw new Error("Failed to fetch GitHub projects");
      }
      const repos = await response.json();
      
      // Filter out the portfolio repository and map to our project schema
      const projects = repos
        .filter((repo: any) => repo.name !== "portfolio")
        .map((repo: any) => ({
          name: repo.name,
          description: repo.description || "No description available",
          repoUrl: repo.html_url,
          topics: repo.topics || [],
          starCount: repo.stargazers_count
        }));

      res.json(projects);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch GitHub projects" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
