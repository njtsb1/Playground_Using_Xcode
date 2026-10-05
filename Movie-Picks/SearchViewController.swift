//
//  SearchViewController.swift
//  Movie-Picks
//

import UIKit

class SearchViewController: UIViewController {
    
    @IBOutlet var searchText: UITextField!
    @IBOutlet var tableView: UITableView!
    
    @IBAction func search(sender: UIButton) {
        guard let query = searchText.text, !query.isEmpty else {
            print("Search query is empty.")
            return
        }
        print("Searching for: \(query)")
    }

    override func viewDidLoad() {
        super.viewDidLoad()
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
}
