//
//  ViewController.swift
//  Movie-Picks
//

import UIKit

class ViewController: UIViewController, UITableViewDelegate, UITableViewDataSource {
    
    var favoriteMovies: [Movie] = []
    
    @IBOutlet var mainTableView: UITableView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        
        if favoriteMovies.isEmpty {
            let defaultMovie = Movie(
                id: "tt03",
                year: "2005",
                imageUrl: "https://ssl-images-amazon.com",
                plot: "Batman Begins"
            )
            favoriteMovies.append(defaultMovie)
        }
        
        mainTableView.reloadData()
    }
    
    // MARK: - TableView Data Source
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return favoriteMovies.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        guard let movieCell = tableView.dequeueReusableCell(withIdentifier: "customcell", for: indexPath) as? CustomTableViewCell else {
            return UITableViewCell()
        }
        
        let movie = favoriteMovies[indexPath.row]
        
        // Displaying static text using the challenge variables as project data placeholders
        movieCell.movieTitle?.text = "\(movie.firstName) \(movie.lastName ?? "")"
        movieCell.movieYear?.text = movie.year
        
        displayMovieImage(indexPath.row, movieCell: movieCell)
        
        return movieCell
    }
    
    // MARK: - Image Downloader
    
    func displayMovieImage(_ row: Int, movieCell: CustomTableViewCell) {
        guard let url = URL(string: favoriteMovies[row].imageUrl) else { return }
        
        URLSession.shared.dataTask(with: url) { (data, response, error) in
            if let error = error {
                print("Error downloading image: \(error)")
                return
            }
            
            guard let data = data, let image = UIImage(data: data) else { return }
            
            DispatchQueue.main.async {
                movieCell.movieImageView?.image = image
            }
        }.resume()
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
}
